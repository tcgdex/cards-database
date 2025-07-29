import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		pt: "Froslass",
		de: "Frosdedje"
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
		en: "Snorunt",
		fr: "Stalgamin",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Glare",
				fr: "Regard Maléfique",
				es: "Mirada Maldita",
				it: "Bagliore Maledetto",
				pt: "Olhar Amaldiçoado",
				de: "Verfluchender Blick"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can’t attach any Special Energy cards from his or her hand to his or her Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede unir ninguna carta de Energía Especial de su mano a su Pokémon.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può assegnare carte Energia speciale dalla sua mano ai suoi Pokémon.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, seu oponente não poderá ligar nenhum card de Energia Especial da mão dele ao Pokémon dele.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Spezial-Energiekarten von seiner Hand an seine Pokémon anlegen."
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
				en: "Blizzard",
				fr: "Blizzard",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	thirdParty: {
		cardmarket: 281044
	}
}

export default card
