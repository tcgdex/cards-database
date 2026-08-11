import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Linoone",
		'fr-fr': "Linéon",
		'es-es': "Linoone",
		'es-mx': "Linoone",
		'de-de': "Geradaks",
		'it-it': "Linoone",
		'pt-br': "Linoone"
	},

	evolveFrom: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton",
		'es-es': "Zigzagoon",
		'es-mx': "Zigzagoon",
		'de-de': "Zigzachs",
		'it-it': "Zigzagoon",
		'pt-br': "Zigzagoon",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [264],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Excited Dash",
			'fr-fr': "Ruée Dynamique",
			'es-es': "Impulso Veloz",
			'es-mx': "Arranque Vibrante",
			'de-de': "Begeisterter Spurt",
			'it-it': "Fervorscatto",
			'pt-br': "Disparada Animada"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, and if you have any Mega Evolution Pokémon ex in play, you may use this Ability. Switch this Pokémon with your Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, et si vous avez au moins un Pokémon-ex Méga-Évolution en jeu, vous pouvez utiliser ce talent. Échangez ce Pokémon contre votre Pokémon Actif.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu Banca y tienes algún Pokémon ex Megaevolución en juego, puedes usar esta habilidad. Cambia este Pokémon por tu Pokémon Activo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca y tienes algún Pokémon ex Megaevolución en juego, puedes usar esta Habilidad. Cambia este Pokémon por tu Pokémon Activo.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Bank ist und wenn du mindestens 1 Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Tausche dieses Pokémon gegen dein Aktives Pokémon aus.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina e hai dei Pokémon-ex Megaevoluzione in gioco, puoi usare questa abilità. Scambia questo Pokémon con il tuo Pokémon attivo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco e se você tiver algum Pokémon ex de Megaevolução em jogo, você poderá usar esta Habilidade. Troque este Pokémon pelo seu Pokémon Ativo."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'es-mx': "Cuchillada",
			'de-de': "Schlitzer",
			'it-it': "Lacerazione",
			'pt-br': "Talho"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It uses its explosive speed and razor-sharp claws to bring down prey. Running along winding paths is not its strong suit.",
	},

	illustrator: "nagimiso",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857657,
				tcgplayer: 662175,
				cardtrader: 356868
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857657,
				tcgplayer: 662175,
				cardtrader: 356868
			}
		},
	],
}

export default card
