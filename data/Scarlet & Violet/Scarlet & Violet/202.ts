import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Scovillain",
		fr: "Scovilain",
		es: "Scovillain",
		it: "Scovillain",
		pt: "Scovillain",
		de: "Halupenjo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Capsakid"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hot Bite",
			fr: "Morsure Brûlante",
			es: "Mordisco Picante",
			it: "Morso Piccante",
			pt: "Mordida Picante",
			de: "Heißer Biss"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Super Spicy Breath",
			fr: "Souffle Super Pimenté",
			es: "Aliento Superpicante",
			it: "Alito Super Piccante",
			pt: "Baforada Superapimentada",
			de: "Superscharfer Atem"
		},

		effect: {
			en: "If this Pokémon has any {R} Energy attached, this attack does 90 more damage.",
			fr: "Si au moins une Énergie {R} est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía {R} unida, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie {R} assegnate, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia {R} ligada a ele, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 {R}-Energie angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "KIYOTAKA OSHIYAMA",

	thirdParty: {
		cardmarket: 702325
	}
}

export default card