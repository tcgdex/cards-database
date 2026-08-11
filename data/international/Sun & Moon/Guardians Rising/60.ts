import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Tapu Lele GX",
		fr: "Tokopiyon GX",
		es: "Tapu Lele GX",
		it: "Tapu Lele GX",
		pt: "Tapu Lele GX",
		de: "Kapu-Fala GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				en: "Wonder Tag",
				fr: "Relais Miracle",
				es: "Toque Asombroso",
				it: "Staffetta Miracolosa",
				pt: "Toque Assombroso",
				de: "Wunderfang"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
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
				en: "Energy Drive",
				fr: "Propulsion d’Énergie",
				es: "Impulso de Energía",
				it: "Motore Energia",
				pt: "Impulso de Energia",
				de: "Energieantrieb"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn’t affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos. Este daño no se ve afectado por Debilidad o Resistencia.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a ambos os Pokémon Ativos. Este dano não é afetado por Fraqueza ou Resistência.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tapu Cure GX",
				fr: "Toko Soins GX",
				es: "Cura Tapu GX",
				it: "Tapucura-GX",
				pt: "Cura Tapu GX",
				de: "Kapu-Heilung GX"
			},
			effect: {
				en: "Heal all damage from 2 of your Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de 2 de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a 2 de tus Pokémon en Banca. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura due dei tuoi Pokémon in panchina da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano de 2 dos seus Pokémon no Banco (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei 2 Pokémon auf deiner Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 296843,
		tcgplayer: 130968
	}
}

export default card
