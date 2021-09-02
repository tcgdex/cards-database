import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
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
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Shadow",
				fr: "Ombre Maudite",
				es: "Sombra Maldita",
				it: "Maledombra",
				pt: "Sombra Amaldiçoada",
				de: "Dunkles Unheil"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez placer 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes poner 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi distribuire a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Uma vez na sua vez de jogar (antes de atacar), se este Pokémon for seu Pokémon Ativo, você poderá colocar 3 marcadores de danos nos Pokémon do seu oponente da forma que desejar.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon dein Aktives Pokémon ist, 3 Schadensmarken beliebig auf die Pokémon deines Gegners verteilen."
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
				en: "Eerie Glow",
				fr: "Lueur Sinistre",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Confused.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
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



}

export default card
