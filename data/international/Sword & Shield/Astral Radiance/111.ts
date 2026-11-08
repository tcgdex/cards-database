import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
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
			'en-us': "Metal Press",
			'fr-fr': "Pression Métallique",
			'es-es': "Presión Metálica",
			'it-it': "Pressa Metallica",
			'pt-br': "Compressão Metálica",
			'de-de': "Metallpresse"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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
		'en-us': "Floats using a mysterious energy. The pattern engraved upon its back is held as sacred and can sometimes be found in imagery from ancient cemeteries and other such timeworn places.",
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
