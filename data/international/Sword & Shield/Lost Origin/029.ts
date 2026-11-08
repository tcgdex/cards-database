import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [668],
	set: Set,

	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Scorching Aura",
			'fr-fr': "Aura Incandescente",
			'es-es': "Aura Candente",
			'it-it': "Aura Ustionante",
			'pt-br': "Aura Flamejante",
			'de-de': "Versengende Aura"
		},

		effect: {
			'en-us': "During Pokémon Checkup, put 4 damage counters on your opponent's Burned Pokémon instead of 2.",
			'fr-fr': "Pendant le Contrôle Pokémon, placez 4 marqueurs de dégâts sur le Pokémon Brûlé de votre adversaire au lieu de 2.",
			'es-es': "Durante el Chequeo Pokémon, pon 4 contadores de daño en vez de 2 en el Pokémon Quemado de tu rival.",
			'it-it': "Metti quattro segnalini danno invece di due sui Pokémon bruciati del tuo avversario durante il controllo Pokémon.",
			'pt-br': "Durante o Checape Pokémon, coloque 4 contadores de dano no Pokémon Queimado do seu oponente ao invés de 2.",
			'de-de': "Lege beim Pokémon-Check 4 Schadensmarken anstelle von 2 auf die verbrannten Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Fire Fang",
			'fr-fr': "Crocs Feu",
			'es-es': "Colmillo Ígneo",
			'it-it': "Rogodenti",
			'pt-br': "Presas de Fogo",
			'de-de': "Feuerzahn"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Queimado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674040,
				tcgplayer: 283901
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674040,
				tcgplayer: 283901
			}
		},
	],
}

export default card
