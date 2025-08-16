import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Secondary Chills",
				fr: "Tremblements Secondaires",
				es: "Congelación Secundaria",
				it: "Brividi Secondari",
				pt: "Calafrio Secundário",
				de: "Sekundärschauder"
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. El Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. O Pokémon Ativo do seu oponente agora está Paralisado.",
				de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365699,
		tcgplayer: 178870
	}
}

export default card
