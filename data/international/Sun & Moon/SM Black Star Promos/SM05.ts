import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Snorlax GX",
		'fr-fr': "Ronflex GX",
		'es-es': "Snorlax GX",
		'it-it': "Snorlax GX",
		'pt-br': "Snorlax GX",
		'de-de': "Relaxo GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
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
				'en-us': "Collapse",
				'fr-fr': "Effondrement",
				'es-es': "Colapso",
				'it-it': "Collassare",
				'pt-br': "Colapso",
				'de-de': "Kollaps"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi.",
				'es-es': "Este Pokémon pasa a estar Dormido.",
				'it-it': "Questo Pokémon viene addormentato.",
				'pt-br': "Este Pokémon agora está Adormecido.",
				'de-de': "Dieses Pokémon schläft jetzt."
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
				'en-us': "Thunderous Snore",
				'fr-fr': "Ronflement Tonitruant",
				'es-es': "Ronquido Atronador",
				'it-it': "Russare Fragoroso",
				'pt-br': "Ronco Estrondoso",
				'de-de': "Donnerndes Schnarchen"
			},
			effect: {
				'en-us': "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
				'fr-fr': "Cette attaque peut être utilisée si ce Pokémon est Endormi. S’il n’est pas Endormi, cette attaque ne fait rien.",
				'es-es': "Este ataque se puede usar si este Pokémon está Dormido. Si no está Dormido, este ataque no hace nada.",
				'it-it': "Questo attacco può essere usato se questo Pokémon è addormentato. Se non lo è, questo attacco non ha effetto.",
				'pt-br': "Este ataque pode ser usado se este Pokémon estiver Adormecido. Se não estiver Adormecido, este ataque não fará nada.",
				'de-de': "Diese Attacke kann eingesetzt werden, wenn dieses Pokémon schläft. Wenn es nicht schläft, hat diese Attacke keine Auswirkungen."
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
				'en-us': "Pulverizing Pancake GX",
				'fr-fr': "Gare au Ronflex GX",
				'es-es': "Arrojo Intempestivo GX",
				'it-it': "Adesso Faccio sul Serio GX",
				'pt-br': "Panqueca Pulverizadora GX",
				'de-de': "Schluss mit lustig GX"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Ce Pokémon est maintenant Endormi. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este Pokémon pasa a estar Dormido. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo Pokémon viene addormentato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este Pokémon agora está Adormecido (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Dieses Pokémon schläft jetzt. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 4,
}

export default card
