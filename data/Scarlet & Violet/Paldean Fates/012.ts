import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [323],
	set: Set,

	name: {
		en: "Camerupt",
		fr: "Camérupt",
		es: "Camerupt",
		it: "Camerupt",
		pt: "Camerupt",
		de: "Camerupt"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Super Singe",
			fr: "Super Roussi",
			es: "Superquemadura",
			it: "Super Scottata",
			pt: "Superchamuscada",
			de: "Super-Versengung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Cinder Cannon",
			fr: "Canon à Braises",
			es: "Cañón de Ceniza",
			it: "Cannonbrace",
			pt: "Canhão de Cinzas",
			de: "Zunderkanone"
		},

		effect: {
			en: "You may discard a {F} Energy from this Pokémon. If you do, this attack does 120 more damage.",
			fr: "Vous pouvez défausser une Énergie {F} de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar 1 Energía {F} de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			it: "Puoi scartare un'Energia {F} da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			pt: "Você pode descartar uma Energia {F} deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			de: "Du kannst 1 {F}-Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "satoma",

	thirdParty: {
		cardmarket: 751538
	}
}

export default card