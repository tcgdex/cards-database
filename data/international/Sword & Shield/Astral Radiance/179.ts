import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		'en-us': "Oranguru V",
		'fr-fr': "Gouroutan V",
		'es-es': "Oranguru V",
		'it-it': "Oranguru V",
		'pt-br': "Oranguru V",
		'de-de': "Kommandutan V"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Back Order",
			'fr-fr': "Réapprovisionnement",
			'es-es': "Pedido Pendiente",
			'it-it': "Ordine Arretrato",
			'pt-br': "Pedido Pendente",
			'de-de': "Nachbestellung"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may search your deck for up to 2 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez chercher dans votre deck jusqu'à 2 cartes Outil Pokémon, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes buscar en tu baraja hasta 2 cartas de Herramienta Pokémon, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi cercare nel tuo mazzo fino a due carte Oggetto Pokémon, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá procurar por até 2 cartas de Ferramenta Pokémon no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dein Deck nach bis zu 2 Pokémon-Ausrüstungen durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658840,
				tcgplayer: 272429
			}
		},
	],
}

export default card
