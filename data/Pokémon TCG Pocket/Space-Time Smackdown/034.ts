import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Regice",
		fr: "Regice",
		es: "Regice",
		it: "Regice",
		de: "Regice",
		'pt-br': "Regice",
		ko: "레지아이스"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		en: "With cold air that can reach temperatures as low as −328 degrees Fahrenheit, Regice instantly freezes any creature that approaches it.",
		fr: "Regice gèle quiconque s'approche de lui en un instant\navec de l'air glacé pouvant atteindre -200 °C.",
		es: "Usa corrientes de aire gélido de hasta -200 °C para\ncongelar en un instante a cualquiera que se le acerque.",
		it: "Utilizza aria gelida fino a -200 ºC per\ncongelare all'istante chiunque gli si avvicini.",
		de: "Regice kontrolliert bis zu −200 ºC kalte Luft,\nmit der es alles und jeden in seiner Nähe im\nHandumdrehen gefrieren lässt.",
		'pt-br': "Regice usa um ar gelado, que pode alcançar temperaturas\nde até -200 °C, para congelar instantaneamente\nqualquer criatura que se aproximar.",
		ko: "영하 200도까지 내려가는\n냉기를 조종해 다가오는 자를\n순식간에 얼려버린다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Crystal Body",
			fr: "Corps de Cristal",
			es: "Cuerpo Cristalino",
			it: "Cristalcorpo",
			de: "Kristallkörper",
			'pt-br': "Corpo de Cristal",
			ko: "크리스털 바디"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon.",
			fr: "Évitez tous les effets d'attaques utilisées par les Pokémon de votre adversaire infligés à ce Pokémon.",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon.",
			it: "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario.",
			de: "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon.",
			ko: "이 포켓몬은 상대의 포켓몬이 사용하는 기술의 효과를 받지 않는다."
		}
	}],

	attacks: [{
		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			de: "Frostschlag",
			'pt-br': "Pancada Congelada",
			ko: "프로스트 스매시"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card
