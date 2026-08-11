import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		'en-us': "Oinkologne",
		'fr-fr': "Fragroin",
		'es-es': "Oinkologne",
		'de-de': "Fragrunz",
		'it-it': "Oinkologne",
		'pt-br': "Oinkologne",
		'es-mx': "Oinkologne"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet",
		'es-es': "Lechonk",
		'de-de': "Ferkuli",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'es-mx': "Lechonk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Aromatic Stomps",
			'fr-fr': "Piétinements Aromatiques",
			'es-es': "Pisotones Aromáticos",
			'de-de': "Aromastampfer",
			'it-it': "Pestone Aromatico",
			'pt-br': "Pisada Aromática",
			'es-mx': "Pisotones Aromáticos"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'de-de': "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'de-de': "Abrupter Kopfstoß",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'es-mx': "Cabezazo Rebotante"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Mina Nakai",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817292,
				tcgplayer: 623567
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817292,
				tcgplayer: 623567
			}
		},
	],
}

export default card
