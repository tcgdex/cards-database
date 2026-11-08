import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Tapu Lele GX",
		'fr-fr': "Tokopiyon GX",
		'es-es': "Tapu Lele GX",
		'it-it': "Tapu Lele GX",
		'pt-br': "Tapu Lele GX",
		'de-de': "Kapu-Fala GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		786,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wonder Tag",
				'fr-fr': "Relais Miracle",
				'es-es': "Toque Asombroso",
				'it-it': "Staffetta Miracolosa",
				'pt-br': "Toque Assombroso",
				'de-de': "Wunderfang"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Drive",
				'fr-fr': "Propulsion d’Énergie",
				'es-es': "Impulso de Energía",
				'it-it': "Motore Energia",
				'pt-br': "Impulso de Energia",
				'de-de': "Energieantrieb"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a ambos os Pokémon Ativos. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Tapu Cure GX",
				'fr-fr': "Toko Soins GX",
				'es-es': "Cura Tapu GX",
				'it-it': "Tapucura-GX",
				'pt-br': "Cura Tapu GX",
				'de-de': "Kapu-Heilung GX"
			},
			effect: {
				'en-us': "Heal all damage from 2 of your Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Soignez tous les dégâts de 2 de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cura todos los puntos de daño a 2 de tus Pokémon en Banca. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cura due dei tuoi Pokémon in panchina da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Cure todo o dano de 2 dos seus Pokémon no Banco (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Heile allen Schaden bei 2 Pokémon auf deiner Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297603,
		tcgplayer: 130970
	}
}

export default card
