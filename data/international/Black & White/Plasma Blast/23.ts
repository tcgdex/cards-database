import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'pt-br': "Froslass",
		'de-de': "Frosdedje"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		478,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cursed Glare",
				'fr-fr': "Regard Maléfique",
				'es-es': "Mirada Maldita",
				'it-it': "Bagliore Maledetto",
				'pt-br': "Olhar Amaldiçoado",
				'de-de': "Verfluchender Blick"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can’t attach any Special Energy cards from his or her hand to his or her Pokémon.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede unir ninguna carta de Energía Especial de su mano a su Pokémon.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può assegnare carte Energia speciale dalla sua mano ai suoi Pokémon.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, seu oponente não poderá ligar nenhum card de Energia Especial da mão dele ao Pokémon dele.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Spezial-Energiekarten von seiner Hand an seine Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard",
				'fr-fr': "Blizzard",
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It freezes prey by blowing its -58 degrees F breath. It is said to then secretly display its prey.",
	},

	thirdParty: {
		cardmarket: 281044,
		tcgplayer: 85574
	}
}

export default card
