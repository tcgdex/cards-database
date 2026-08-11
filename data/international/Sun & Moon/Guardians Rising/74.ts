import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Lycanroc GX",
		'fr-fr': "Lougaroc GX",
		'es-es': "Lycanroc GX",
		'it-it': "Lycanroc GX",
		'pt-br': "Lycanroc GX",
		'de-de': "Wolwerock GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bloodthirsty Eyes",
				'fr-fr': "Regard Sanguinaire",
				'es-es': "Ojos Sanguinarios",
				'it-it': "Sguardo Sanguinario",
				'pt-br': "Olhos Impiedosos",
				'de-de': "Blutrünstige Augen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
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
				'en-us': "Claw Slash",
				'fr-fr': "Tranch’Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 110,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dangerous Rogue GX",
				'fr-fr': "Dangereux Truand GX",
				'es-es': "Pícaro Peligroso GX",
				'it-it': "Pericolo Ferale-GX",
				'pt-br': "Trapaceiro Perigoso GX",
				'de-de': "Gaunergefahr GX"
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your opponent’s Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada Pokémon en Banca de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni Pokémon nella panchina del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada Pokémon no Banco do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 296844,
		tcgplayer: 130984
	}
}

export default card
