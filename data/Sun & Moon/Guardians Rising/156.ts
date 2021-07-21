import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Lycanroc-GX",
		fr: "Lougaroc-GX",
		es: "Lycanroc-GX",
		it: "Lycanroc-GX",
		pt: "Lycanroc-GX",
		de: "Wolwerock-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 200,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bloodthirsty Eyes",
				fr: "Regard Sanguinaire",
				es: "Ojos Sanguinarios",
				it: "Sguardo Sanguinario",
				pt: "Olhos Impiedosos",
				de: "Blutrünstige Augen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 110,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dangerous Rogue GX",
				fr: "Dangereux Truand GX",
				es: "Pícaro Peligroso GX",
				it: "Pericolo Ferale-GX",
				pt: "Trapaceiro Perigoso GX",
				de: "Gaunergefahr GX"
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent’s Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada Pokémon en Banca de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni Pokémon nella panchina del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano para cada Pokémon no Banco do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
