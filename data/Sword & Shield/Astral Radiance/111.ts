import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [436],
	set: Set,
	cameoDexIds: [493, 903],

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Metal Press",
			fr: "Pression Métallique",
			es: "Presión Metálica",
			it: "Pressa Metallica",
			pt: "Compressão Metálica",
			de: "Metallpresse"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Floats using a mysterious energy. The pattern engraved upon its back is held as sacred and can sometimes be found in imagery from ancient cemeteries and other such timeworn places.",
		de: "Es schwebt mithilfe einer rätselhaften Energie. Das Muster auf seinem Rücken gilt als heilig und ist mitunter auf alten Gräbern und an anderen Orten vergangener Zeiten wiederzufinden."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658772,
				tcgplayer: 272332
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658772,
				tcgplayer: 272332
			}
		},
	],
}

export default card
