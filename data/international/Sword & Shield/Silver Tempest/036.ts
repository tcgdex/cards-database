import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ice Wing",
			'fr-fr': "Aile Glace",
			'es-es': "Ala Gélida",
			'it-it': "Alagelata",
			'pt-br': "Asa de Gelo",
			'de-de': "Frostschwinge"
		},

		damage: 20
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Wild Freeze",
			'fr-fr': "Gel Sauvage",
			'es-es': "Congelación Salvaje",
			'it-it': "Gelo Selvaggio",
			'pt-br': "Congelamento Selvagem",
			'de-de': "Wilder Frost"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Paralisado.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682078,
				tcgplayer: 451669
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 874538
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682078,
				tcgplayer: 451669
			}
		},
	],
}

export default card
