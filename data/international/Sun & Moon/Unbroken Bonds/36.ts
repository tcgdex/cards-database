import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		60,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Round ’n’ Round",
				'fr-fr': "Tourne-Tourne",
				'es-es': "Gira y Gira",
				'it-it': "Giro Girotondo",
				'pt-br': "Gira-gira",
				'de-de': "Ringsherum"
			},
			effect: {
				'en-us': "You can use this Ability only if you go second. Once during your first turn (before your attack), you may leave your opponent’s Active Pokémon Confused.",
				'fr-fr': "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
				'es-es': "Puedes usar esta habilidad solo si sales segundo. Una vez durante tu primer turno (antes de tu ataque), puedes dejar al Pokémon Activo de tu rival Confundido.",
				'it-it': "Puoi usare quest’abilità solo se inizi per secondo. Una sola volta durante il tuo turno, prima di attaccare, puoi lasciare il Pokémon attivo del tuo avversario confuso.",
				'pt-br': "Você só pode usar esta Habilidade se for o segundo a jogar. Uma vez durante a sua primeira vez de jogar (antes de atacar), você pode deixar o Pokémon Ativo do seu oponente Confuso.",
				'de-de': "Du kannst diese Fähigkeit nur einsetzen, wenn du als Zweiter am Zug bist. Einmal während deines ersten Zuges (bevor du angreifst) kannst du das Aktive Pokémon deines Gegners verwirren."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Watering",
				'fr-fr': "Arrosage",
				'es-es': "Riego",
				'it-it': "Innaffiare",
				'pt-br': "Irrigação",
				'de-de': "Gießen"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Despite the danger, it wants to come up on land. So it does its best to waddle along, but when an enemy finds it, it rushes back to the water.",
	},

	thirdParty: {
		cardmarket: 372327,
		tcgplayer: 189109
	}
}

export default card
