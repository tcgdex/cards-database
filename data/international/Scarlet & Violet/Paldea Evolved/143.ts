import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [943],
	set: Set,

	name: {
		'fr-fr': "Dogrino",
		'en-us': "Mabosstiff",
		'es-es': "Mabosstiff",
		'it-it': "Mabosstiff",
		'pt-br': "Mabosstiff",
		'de-de': "Mastifioso"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Grondogue",
		'en-us': "Maschiff",
		'es-es': "Maschiff",
		'it-it': "Maschiff",
		'pt-br': "Maschiff",
		'de-de': "Mobtiff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Vindicte",
			'en-us': "Comeuppance",
			'es-es': "Resarcimiento",
			'it-it': "Ritorsione",
			'pt-br': "Punição Justa",
			'de-de': "Denkzettel"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sul Pokémon attaccante dei segnalini danno pari ai danni inflitti a questo Pokémon.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege der Höhe des diesem Pokémon zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Croc Obscur",
			'en-us': "Darkness Fang",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715618,
				tcgplayer: 497656,
				cardtrader: 248797
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715618,
				tcgplayer: 497656,
				cardtrader: 248797
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "This Pokémon can store energy in its large dewlap. Mabosstiff unleashes this energy all at once to blow away enemies.",
	},
}

export default card
