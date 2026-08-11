import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [952],
	set: Set,

	name: {
		'en-us': "Scovillain",
		'fr-fr': "Scovilain",
		'es-es': "Scovillain",
		'it-it': "Scovillain",
		'pt-br': "Scovillain",
		'de-de': "Halupenjo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Capsakid",
		'fr-fr': "Pimito"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hot Bite",
			'fr-fr': "Morsure Brûlante",
			'es-es': "Mordisco Picante",
			'it-it': "Morso Piccante",
			'pt-br': "Mordida Picante",
			'de-de': "Heißer Biss"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Super Spicy Breath",
			'fr-fr': "Souffle Super Pimenté",
			'es-es': "Aliento Superpicante",
			'it-it': "Alito Super Piccante",
			'pt-br': "Baforada Superapimentada",
			'de-de': "Superscharfer Atem"
		},

		effect: {
			'en-us': "If this Pokémon has any {R} Energy attached, this attack does 90 more damage.",
			'fr-fr': "Si au moins une Énergie {R} est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía {R} unida, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie {R} assegnate, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia {R} ligada a ele, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {R}-Energie angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "The green head has turned vicious due to the spicy chemicals stimulating its brain. Once it goes on a rampage, there is no stopping it.",
	},

	thirdParty: {
        cardmarket: 702498,
        tcgplayer: 490062
    }
}

export default card