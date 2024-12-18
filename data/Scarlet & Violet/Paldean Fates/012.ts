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
			en: "You may discard a Fighting Energy from this Pokémon. If you do, this attack does 120 more damage.",
			fr: "Vous pouvez défausser une Énergie Fighting de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar 1 Energía Fighting de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			it: "Puoi scartare un'Energia Fighting da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			pt: "Você pode descartar uma Energia Fighting deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			de: "Du kannst 1 Fighting-Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
		es: "Numel",
		it: "Numel",
		pt: "Numel",
		de: "Camaub"
	}
}

export default card