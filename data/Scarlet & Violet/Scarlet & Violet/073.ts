import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		de: "Pamo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Jolt",
			fr: "Secousse",
			es: "Calambre",
			it: "Sobbalzo",
			pt: "Choque",
			de: "Durchrütteln"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tika Matsuno",

	description: {
		en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
	},

	thirdParty: {
        cardmarket: 702369,
        tcgplayer: 487927
    }
}

export default card