import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		en: "Oranguru V",
		fr: "Gouroutan V",
		es: "Oranguru V",
		it: "Oranguru V",
		pt: "Oranguru V",
		de: "Kommandutan V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Back Order",
			fr: "Réapprovisionnement",
			es: "Pedido Pendiente",
			it: "Ordine Arretrato",
			pt: "Pedido Pendente",
			de: "Nachbestellung"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may search your deck for up to 2 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez chercher dans votre deck jusqu'à 2 cartes Outil Pokémon, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes buscar en tu baraja hasta 2 cartas de Herramienta Pokémon, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi cercare nel tuo mazzo fino a due carte Oggetto Pokémon, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá procurar por até 2 cartas de Ferramenta Pokémon no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dein Deck nach bis zu 2 Pokémon-Ausrüstungen durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658794,
		tcgplayer: 272429
	}
}

export default card