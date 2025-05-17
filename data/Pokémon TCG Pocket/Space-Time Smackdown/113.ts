import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shieldon",
		fr: "Dinoclier",
		es: "Shieldon",
		it: "Shieldon",
		de: "Schilterus",
		'pt-br': "Shieldon",
		ko: "방패톱스"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Armor Fossil"
	},

	description: {
		en: "A mild-mannered, herbivorous Pokémon, it used its face to dig up tree roots to eat. The skin on its face was plenty tough.",
		fr: "Cet herbivore, très calme de nature, utilisait la peau durcie\nde son museau pour déterrer des racines à grignoter.",
		es: "Un Pokémon herbívoro de carácter afable.\nCon su dura protección facial podía desenterrar\nlas raíces de los árboles para comérselas.",
		it: "Era un docile Pokémon erbivoro. Si serviva del\nmuso protetto dalla pelle coriacea per scavare\nnel terreno e mangiare le radici degli alberi.",
		de: "Ein friedliches, pflanzenfressendes Pokémon.\nMit seiner harten Gesichtshaut wühlte es im\nBoden und fraß Baumwurzeln.",
		'pt-br': "Um Pokémon manso e herbívoro, que desenterrava\nraízes de árvores com o rosto para comer. A pele\nde seu rosto era bastante áspera.",
		ko: "온순한 초식 포켓몬.\n튼튼한 얼굴 피부로 지면을\n파고들어 나무 뿌리도 먹었다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss",
			'pt-br': "Cabeçada",
			ko: "박치기"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
