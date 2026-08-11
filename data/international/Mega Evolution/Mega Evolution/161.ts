import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Absol ex",
		'fr-fr': "Méga-Absol-ex",
		'de-de': "Mega-Absol-ex",
		'it-it': "Mega Absol-ex",
		'es-es': "Mega-Absol ex",
		'pt-br': "Mega Absol ex",
		'es-mx': "Mega-Absol ex"
	},

	suffix: "ex",
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [359],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Terminal Period",
			'fr-fr': "Derniers Instants",
			'de-de': "Endstation",
			'it-it': "Attimo Finale",
			'es-es': "Momento Terminal",
			'pt-br': "Fase Terminal",
			'es-mx': "Momento Final"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has exactly 6 damage counters on it, that Pokémon is Knocked Out.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a exactement 6 marqueurs de dégâts, il est mis K.O.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners genau 6 Schadensmarken liegen, ist jenes Pokémon kampfunfähig.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha esattamente sei segnalini danno, quel Pokémon viene messo KO.",
			'es-es': "Si el Pokémon Activo de tu rival tiene exactamente 6 contadores de daño sobre él, ese Pokémon queda Fuera de Combate.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver exatamente 6 contadores de dano nele, aquele Pokémon será Nocauteado.",
			'es-mx': "Si el Pokémon Activo de tu rival tiene exactamente 6 contadores de daño sobre él, ese Pokémon queda Fuera de Combate."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Claw of Darkness",
			'fr-fr': "Griffe de l'Obscurité",
			'de-de': "Finsternisklaue",
			'it-it': "Artiglio dell'Oscurità",
			'es-es': "Garra Siniestra",
			'pt-br': "Garra Nefasta",
			'es-mx': "Garra de Oscuridad"
		},

		effect: {
			'en-us': "Your opponent reveals their hand, and you discard a card you find there.",
			'fr-fr': "Votre adversaire montre sa main et vous défaussez une carte que vous y trouvez.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten und du legst 1 Karte, die du dort findest, auf seinen Ablagestapel.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano e tu ne scarti una.",
			'es-es': "Tu rival enseña las cartas de su mano, y tú descartas 1 carta que encuentres entre ellas.",
			'pt-br': "Seu oponente revela a mão dele, e você descarta uma carta que encontrar lá.",
			'es-mx': "Tu rival muestra su mano, y tú descartas 1 carta que encuentres en ella."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851232,
				tcgplayer: 654500
			}
		},
	],
}

export default card
