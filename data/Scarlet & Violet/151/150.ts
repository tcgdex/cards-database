import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		fr: "Mewtwo",
		en: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
		de: "Mewtu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Bouclier Réfléchissant",
			en: "Reflective Barrier",
			es: "Barrera Reflectante",
			it: "Barriera Riflettente",
			pt: "Barreira Reflexiva",
			de: "Reflektive Barriere"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sul Pokémon attaccante dei segnalini danno pari ai danni inflitti a questo Pokémon.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege der Höhe des diesem Pokémon zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Psykochoc",
			en: "Psyslash",
			es: "Golpe Psíquico",
			it: "Psicocolpo",
			pt: "Pancada Psíquica",
			de: "Psy-Schlitzer"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "AKIRA EGAWA",

	thirdParty: {
		cardmarket: 733745
	}
}

export default card
