import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
		es: "Vulpix de Alola",
		it: "Vulpix di Alola",
		pt: "Vulpix de Alola",
		de: "Alola Vulpix"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				es: "Nieve Polvo",
				it: "Polneve",
				pt: "Neve em Pó",
				de: "Pulverschnee"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Adormecido.",
				de: "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Icy Snow",
				fr: "Verglas",
				es: "Nieve Helada",
				it: "Geloneve",
				pt: "Neve Congelada",
				de: "Eisiger Schnee"
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
		cardmarket: 299433
	}
}

export default card
