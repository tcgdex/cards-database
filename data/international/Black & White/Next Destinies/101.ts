import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cursed Shadow",
				'fr-fr': "Ombre Maudite",
				'es-es': "Sombra Maldita",
				'it-it': "Maledombra",
				'pt-br': "Sombra Amaldiçoada",
				'de-de': "Dunkles Unheil"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may put 3 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez placer 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes poner 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi distribuire a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Uma vez na sua vez de jogar (antes de atacar), se este Pokémon for seu Pokémon Ativo, você poderá colocar 3 marcadores de danos nos Pokémon do seu oponente da forma que desejar.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon dein Aktives Pokémon ist, 3 Schadensmarken beliebig auf die Pokémon deines Gegners verteilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Eerie Glow",
				'fr-fr': "Lueur Sinistre",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned and Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280326,
		tcgplayer: 84166
	}
}

export default card
