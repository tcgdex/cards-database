import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Venusaur & Snivy GX",
		fr: "Florizarre et Vipélierre GX",
		es: "Venusaur y Snivy GX",
		it: "Venusaur e Snivy GX",
		pt: "Venusaur e Snivy GX",
		de: "Bisaflor & Serpifeu GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
		495,
	],

	hp: 270,

	types: [
		"Grass",
	],

	suffix: "TAG TEAM-GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shining Vine",
				fr: "Liane Étincelante",
				es: "Liana Radiante",
				it: "Frustata Lucente",
				pt: "Vinha Brilhante",
				de: "Schimmernde Ranke"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is your Active Pokémon, when you attach a Grass Energy card from your hand to it, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour, si ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une carte Énergie Grass de votre main, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Una vez durante tu turno, si este Pokémon es tu Pokémon Activo, cuando le unas 1 carta de Energía Grass de tu mano, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, se questo Pokémon è il tuo Pokémon attivo, quando gli assegni una carta Energia Grass dalla tua mano, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar, se este Pokémon for o seu Pokémon Ativo, quando você ligar 1 carta de Energia Grass da sua mão a ele, você poderá trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Einmal während deines Zuges, wenn dieses Pokémon dein Aktives Pokémon ist und wenn du 1 Grass-Energiekarte aus deiner Hand an es anlegst, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Forest Dump",
				fr: "Rejet Forestier",
				es: "Descarga Forestal",
				it: "Impatto Forestale",
				pt: "Floresta Entulhada",
				de: "Waldhieb"
			},

			damage: 160,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Plant GX",
				fr: "Plante Solaire GX",
				es: "Planta Solar GX",
				it: "Pianta Solare GX",
				pt: "Usina Solar GX",
				de: "Solargewächs GX"
			},
			effect: {
				en: "This attack does 50 damage to each of your opponent’s Pokémon. If this Pokémon has at least 2 extra Energy attached to it (in addition to this attack’s cost), heal all damage from all of your Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival. Si este Pokémon tiene por lo menos 2 Energías adicionales unidas a él (además de las del coste de este ataque), cura todos los puntos de daño a todos tus Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni a ciascuno dei Pokémon del tuo avversario. Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, cura tutti i tuoi Pokémon da tutti i danni. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano a cada um dos Pokémon do seu oponente. Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), cure todo o dano de todos os seus Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu. Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), heile allen Schaden bei jedem deiner Pokémon. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Plante Solaire-GX",
			},
			effect: {
				fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 398449,
		tcgplayer: 201330
	}
}

export default card
