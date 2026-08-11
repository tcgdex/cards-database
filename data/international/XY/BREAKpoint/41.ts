import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Greninja BREAK",
		'fr-fr': "Amphinobi TURBO",
		'es-es': "Greninja TURBO",
		'it-it': "Greninja TURBO",
		'pt-br': "Greninja TURBO",
		'de-de': "Quajutsu-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 170,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi",
		'es-es': "Greninja",
		'it-it': "Greninja",
		'pt-br': "Greninja",
		'de-de': "Quajutsu"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Giant Water Shuriken",
				'fr-fr': "Sheauriken Géant",
				'es-es': "Shuriken de Agua Gigante",
				'it-it': "Acqualame Giganti",
				'pt-br': "Estrela Ninja de Água Gigante",
				'de-de': "Gigantische Wasser-Shuriken"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a Water Energy card from your hand. If you do, put 6 damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, placez 6 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes descartar 1 carta de Energía Water de tu mano. Si lo haces, pon 6 contadores de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi scartare una carta Energia Water dalla tua mano. Se lo fai, metti sei segnalini danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Uma vez na sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá descartar um card de Water Energia da sua mão. Se fizer isso, coloque 6 contadores de danos em 1 dos Pokémon do seu oponente.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Water-Energiekarte von deiner Hand auf deinen Ablagestapel legen, wenn dies dein Aktives Pokémon ist. Wenn du das machst, lege 6 Schadensmarken auf 1 Pokémon deines Gegners."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 288216,
		tcgplayer: 111548
	}
}

export default card
