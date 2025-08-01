import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
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
				en: "Round ’n’ Round",
				fr: "Tourne-Tourne",
				es: "Gira y Gira",
				it: "Giro Girotondo",
				pt: "Gira-gira",
				de: "Ringsherum"
			},
			effect: {
				en: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may leave your opponent’s Active Pokémon Confused.",
				fr: "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
				es: "Puedes usar esta habilidad solo si sales segundo. Una vez durante tu primer turno (antes de tu ataque), puedes dejar al Pokémon Activo de tu rival Confundido.",
				it: "Puoi usare quest’abilità solo se inizi per secondo. Una sola volta durante il tuo turno, prima di attaccare, puoi lasciare il Pokémon attivo del tuo avversario confuso.",
				pt: "Você só pode usar esta Habilidade se for o segundo a jogar. Uma vez durante a sua primeira vez de jogar (antes de atacar), você pode deixar o Pokémon Ativo do seu oponente Confuso.",
				de: "Du kannst diese Fähigkeit nur einsetzen, wenn du als Zweiter am Zug bist. Einmal während deines ersten Zuges (bevor du angreifst) kannst du das Aktive Pokémon deines Gegners verwirren."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Watering",
				fr: "Arrosage",
				es: "Riego",
				it: "Innaffiare",
				pt: "Irrigação",
				de: "Gießen"
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

	thirdParty: {
		cardmarket: 372327
	}
}

export default card
