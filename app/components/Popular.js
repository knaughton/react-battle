var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
  var languages = [
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'CSS',
    'Python'
  ];
  return (
    <ul className='languges'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguge ? { color: '#d0021b'}: null}
            onClick={props.onSelect.bind(null, lang)} 
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguge: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedLanguge: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguge: lang
      }
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage 
          selectedLanguge={this.state.selectedLanguge}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular