import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Dogrino",
		en: "Mabosstiff",
		es: "Mabosstiff",
		it: "Mabosstiff",
		pt: "Mabosstiff",
		de: "Mastifioso"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Vindicte",
			en: "Comeuppance",
			es: "Resarcimiento",
			it: "Ritorsione",
			pt: "Punição Justa",
			de: "Denkzettel"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sul Pokémon attaccante dei segnalini danno pari ai danni inflitti a questo Pokémon.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege der Höhe des diesem Pokémon zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Croc Obscur",
			en: "Darkness Fang",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Maschiff"
	}
}

export default card