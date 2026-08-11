import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'es-es': "Regice",
		'it-it': "Regice",
		'de-de': "Regice",
		'pt-br': "Regice",
		'ko-kr': "레지아이스"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [378],
	hp: 110,
	types: ["Water"],

	description: {
		'en-us': "With cold air that can reach temperatures as low as −328 degrees Fahrenheit, Regice instantly freezes any creature that approaches it.",
		'fr-fr': "Regice gèle quiconque s'approche de lui en un instant\navec de l'air glacé pouvant atteindre -200 °C.",
		'es-es': "Usa corrientes de aire gélido de hasta -200 °C para\ncongelar en un instante a cualquiera que se le acerque.",
		'it-it': "Utilizza aria gelida fino a -200 ºC per\ncongelare all'istante chiunque gli si avvicini.",
		'de-de': "Regice kontrolliert bis zu −200 ºC kalte Luft,\nmit der es alles und jeden in seiner Nähe im\nHandumdrehen gefrieren lässt.",
		'pt-br': "Regice usa um ar gelado, que pode alcançar temperaturas\nde até -200 °C, para congelar instantaneamente\nqualquer criatura que se aproximar.",
		'ko-kr': "영하 200도까지 내려가는\n냉기를 조종해 다가오는 자를\n순식간에 얼려버린다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Crystal Body",
			'fr-fr': "Corps de Cristal",
			'es-es': "Cuerpo Cristalino",
			'it-it': "Cristalcorpo",
			'de-de': "Kristallkörper",
			'pt-br': "Corpo de Cristal",
			'ko-kr': "크리스털 바디"
		},

		effect: {
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon.",
			'fr-fr': "Évitez tous les effets d'attaques utilisées par les Pokémon de votre adversaire infligés à ce Pokémon.",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon.",
			'it-it': "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario.",
			'de-de': "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon.",
			'ko-kr': "이 포켓몬은 상대의 포켓몬이 사용하는 기술의 효과를 받지 않는다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'de-de': "Frostschlag",
			'pt-br': "Pancada Congelada",
			'ko-kr': "프로스트 스매시"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
