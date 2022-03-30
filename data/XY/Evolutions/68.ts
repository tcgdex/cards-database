import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		es: "Farfetch'd",
		it: "Farfetch'd",
		pt: "Farfetch'd",
		de: "Porenta"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		83,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leek Slap",
				fr: "Coup d'oignon",
				es: "Bofetada de Puerro",
				it: "Porrosberla",
				pt: "Golpe Alho Poró",
				de: "Lauchschlag"
			},
			effect: {
				en: "This Pokémon can't use Leek Slap during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup d'Oignon pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Bofetada de Puerro durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Porrosberla.",
				pt: "Este Pokémon não poderá usar Golpe Alho Poró na sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Lauchschlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pot Smash",
				fr: "Coup de Casserole",
				es: "Aplaste de Olla",
				it: "Spaccavasi",
				pt: "Esmagador de Panela",
				de: "Topfschmetterer"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
