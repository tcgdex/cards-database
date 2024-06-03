import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Palafin",
		fr: "Superdofin",
		es: "Palafin",
		it: "Palafin",
		pt: "Palafin",
		de: "Delfinator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Zero to Hero",
			fr: "Supermutation",
			es: "Cambio Heroico",
			it: "Supercambio",
			pt: "Do Abismo ao Heroísmo",
			de: "Superwechsel"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from the Active Spot to the Bench, you may search your deck for a Palafin ex and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon. If you switched a Pokémon in this way, put this card into your deck. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace du Poste Actif vers le Banc, vous pouvez chercher dans votre deck un Superdofin-ex, puis l'échanger contre ce Pokémon. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu et tous les autres effets restent sur le nouveau Pokémon. Si vous avez échangé un Pokémon de cette façon, placez cette carte dans votre deck. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve del Puesto Activo a la Banca, puedes buscar en tu baraja 1 Palafin ex y cambiarlo por este Pokémon. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon. Si has cambiado un Pokémon de esta manera, pon esta carta en tu baraja. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla posizione attiva in panchina, puoi cercare nel tuo mazzo un Palafin-ex e scambiarlo con questo Pokémon. Le carte assegnate, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon. Se hai scambiato un Pokémon in questo modo, metti questa carta nel tuo mazzo. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do Campo Ativo para o Banco, você poderá procurar por um Palafin ex no seu baralho e trocá-lo por este Pokémon. Quaisquer cartas ligadas, contadores de dano, Condições Especiais, turnos em jogo e quaisquer outros efeitos permanecem no novo Pokémon. Se você trocou um Pokémon desta forma, coloque esta carta no seu baralho. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von der Aktiven Position auf deine Bank wechselt, kannst du dein Deck nach 1 Delfinator-ex durchsuchen und es gegen dieses Pokémon austauschen. Alle angelegten Karten, Schadensmarken, Speziellen Zustände, die Anzahl der Züge im Spiel sowie alle anderen Effekte verbleiben auf dem neuen Pokémon. Wenn du auf diese Weise ein Pokémon ausgetauscht hast, lege diese Karte in dein Deck. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card