import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It can freely recombine its own cellular structure to transform into other life-forms."
	},

	name: {
		en: "Ditto",
		fr: "Métamorph",
		de: "Ditto",
		es: "Ditto",
		it: "Ditto",
		'es-mx': "Ditto",
		pt: "Ditto"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [132],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprisingly Transform",
			fr: "Morphing Surprise",
			de: "Überraschende Transformation",
			es: "Transformación Sorprendente",
			it: "Mutazione a Sorpresa",
			'es-mx': "Transformación Sorprendente",
			pt: "Transformação Surpresa"
		},

		effect: {
			en: "Flip a coin. If heads, search your deck for a Pokémon and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon. If you switched a Pokémon in this way, put this card into your deck. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon et échangez-le contre ce Pokémon. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu et tous les effets restent sur le nouveau Pokémon. Si vous avez échangé un Pokémon de cette façon, placez cette carte dans votre deck. Mélangez ensuite votre deck.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Pokémon und tausche es gegen dieses Pokémon aus. Alle angelegten Karten, Schadensmarken, Speziellen Zustände, die Anzahl der Züge im Spiel sowie alle anderen Effekte bleiben auf dem neuen Pokémon. Wenn du auf diese Weise ein Pokémon ausgetauscht hast, lege diese Karte in dein Deck. Mische anschließend dein Deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon y cámbialo por este Pokémon. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon. Si has cambiado un Pokémon de esta manera, pon esta carta en tu baraja. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon e scambialo con questo Pokémon. Le carte assegnate, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon. Se hai scambiato un Pokémon in questo modo, metti questa carta nel tuo mazzo. Poi rimischia il tuo mazzo.",
			'es-mx': "Lanza 1 moneda. Si sale cara, busca en tu mazo 1 Pokémon y cámbialo por este Pokémon. Todas las cartas unidas, los contadores de daño, las Condiciones Especiales, los turnos en juego y todos los demás efectos permanecen en el nuevo Pokémon. Si cambiaste un Pokémon de esta manera, pon esta carta en tu mazo. Después, baraja tu mazo.",
			pt: "Jogue uma moeda. Se sair cara, procure por um Pokémon no seu baralho e troque-o por este Pokémon. Quaisquer cartas ligadas, contadores de dano, Condições Especiais, turnos em jogo e quaisquer outros efeitos permanecem no novo Pokémon. Se você trocou um Pokémon desta forma, coloque esta carta no seu baralho. Em seguida, embaralhe o seu baralho."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907722,
				tcgplayer: 716507
			}
		}
	],
}

export default card
