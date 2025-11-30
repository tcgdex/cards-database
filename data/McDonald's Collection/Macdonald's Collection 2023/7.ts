import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		de: "Pamo"
	},

	illustrator: "kantaro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [921],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Nuzzle",
				fr: "Frotte-Frimousse",
				es: "Moflete",
				it: "Elettrococcola",
				pt: "Aconchego",
				de: "Wangenrubbler"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Zap Kick",
				fr: "Coup d'Jus",
				es: "Patada Eléctrica",
				it: "Elettrocalcio",
				pt: "Chute Elétrico",
				de: "Stromtritt"
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

