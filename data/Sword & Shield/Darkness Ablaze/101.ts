import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		es: "Muk",
		it: "Muk",
		pt: "Muk",
		de: "Sleimok"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Triple Poison",
				fr: "Triple Poison",
				es: "Veneno Triple",
				it: "Triplo Veleno",
				pt: "Veneno Triplo",
				de: "Dreifachgift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. During Pokémon Checkup, put 3 damage counters on that Pokémon instead of 1.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon-là au lieu d’un.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 3 contadores de daño en ese Pokémon en vez de 1.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il controllo Pokémon, metti tre segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 3 contadores de dano ao invés de 1 naquele Pokémon.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 3 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Whirlpool",
				fr: "Tourbillon de Boue",
				es: "Torbellino de Residuos",
				it: "Fangovortice",
				pt: "Redemoinho de Lodo",
				de: "Schlammstrudel"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
