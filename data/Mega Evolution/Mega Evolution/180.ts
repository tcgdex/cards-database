import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Absol ex",
		fr: "Méga-Absol-ex",
		de: "Mega-Absol-ex",
		it: "Mega Absol-ex",
		es: "Mega-Absol ex",
		pt: "Mega Absol ex",
		'es-mx': "Mega-Absol ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [359],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Terminal Period",
			fr: "Derniers Instants",
			de: "Endstation",
			it: "Attimo Finale",
			es: "Momento Terminal",
			pt: "Fase Terminal",
			'es-mx': "Momento Final"
		},

		effect: {
			en: "If your opponent's Active Pokémon has exactly 6 damage counters on it, that Pokémon is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire a exactement 6 marqueurs de dégâts, il est mis K.O.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners genau 6 Schadensmarken liegen, ist jenes Pokémon kampfunfähig.",
			it: "Se il Pokémon attivo del tuo avversario ha esattamente sei segnalini danno, quel Pokémon viene messo KO.",
			es: "Si el Pokémon Activo de tu rival tiene exactamente 6 contadores de daño sobre él, ese Pokémon queda Fuera de Combate.",
			pt: "Se o Pokémon Ativo do seu oponente tiver exatamente 6 contadores de dano nele, aquele Pokémon será Nocauteado.",
			'es-mx': "Si el Pokémon Activo de tu rival tiene exactamente 6 contadores de daño sobre él, ese Pokémon queda Fuera de Combate."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Claw of Darkness",
			fr: "Griffe de l'Obscurité",
			de: "Finsternisklaue",
			it: "Artiglio dell'Oscurità",
			es: "Garra Siniestra",
			pt: "Garra Nefasta",
			'es-mx': "Garra de Oscuridad"
		},

		effect: {
			en: "Your opponent reveals their hand, and you discard a card you find there.",
			fr: "Votre adversaire montre sa main et vous défaussez une carte que vous y trouvez.",
			de: "Dein Gegner zeigt dir seine Handkarten und du legst 1 Karte, die du dort findest, auf seinen Ablagestapel.",
			it: "Il tuo avversario mostra le carte che ha in mano e tu ne scarti una.",
			es: "Tu rival enseña las cartas de su mano, y tú descartas 1 carta que encuentres entre ellas.",
			pt: "Seu oponente revela a mão dele, e você descarta uma carta que encontrar lá.",
			'es-mx': "Tu rival muestra su mano, y tú descartas 1 carta que encuentres en ella."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		tcgplayer: 654519,
		cardmarket: 851251
	}
}

export default card