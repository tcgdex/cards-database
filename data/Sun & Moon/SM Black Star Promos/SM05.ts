import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Snorlax GX",
		fr: "Ronflex GX",
		es: "Snorlax GX",
		it: "Snorlax GX",
		pt: "Snorlax GX",
		de: "Relaxo GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 190,

	types: [
		"Colorless",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Collapse",
				fr: "Effondrement",
				es: "Colapso",
				it: "Collassare",
				pt: "Colapso",
				de: "Kollaps"
			},
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
				es: "Este Pokémon pasa a estar Dormido.",
				it: "Questo Pokémon viene addormentato.",
				pt: "Este Pokémon agora está Adormecido.",
				de: "Dieses Pokémon schläft jetzt."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Snore",
				fr: "Ronflement Tonitruant",
				es: "Ronquido Atronador",
				it: "Russare Fragoroso",
				pt: "Ronco Estrondoso",
				de: "Donnerndes Schnarchen"
			},
			effect: {
				en: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
				fr: "Cette attaque peut être utilisée si ce Pokémon est Endormi. S’il n’est pas Endormi, cette attaque ne fait rien.",
				es: "Este ataque se puede usar si este Pokémon está Dormido. Si no está Dormido, este ataque no hace nada.",
				it: "Questo attacco può essere usato se questo Pokémon è addormentato. Se non lo è, questo attacco non ha effetto.",
				pt: "Este ataque pode ser usado se este Pokémon estiver Adormecido. Se não estiver Adormecido, este ataque não fará nada.",
				de: "Diese Attacke kann eingesetzt werden, wenn dieses Pokémon schläft. Wenn es nicht schläft, hat diese Attacke keine Auswirkungen."
			},
			damage: 180,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulverizing Pancake GX",
				fr: "Gare au Ronflex GX",
				es: "Arrojo Intempestivo GX",
				it: "Adesso Faccio sul Serio GX",
				pt: "Panqueca Pulverizadora GX",
				de: "Schluss mit lustig GX"
			},
			effect: {
				en: "This Pokémon is now Asleep. (You can’t use more than 1 GX attack in a game.)",
				fr: "Ce Pokémon est maintenant Endormi. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este Pokémon pasa a estar Dormido. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo Pokémon viene addormentato. Non puoi usare più di un attacco GX a partita.",
				pt: "Este Pokémon agora está Adormecido (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dieses Pokémon schläft jetzt. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4
}

export default card
