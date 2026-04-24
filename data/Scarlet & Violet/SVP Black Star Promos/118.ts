import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [978],
	set: Set,

	name: {
		en: "Tatsugiri",
		fr: "Nigirigon",
		es: "Tatsugiri",
		it: "Tatsugiri",
		pt: "Tatsugiri",
		de: "Nigiragi"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Attract Customers",
			fr: "Attrape-Clientèle",
			es: "Atraer a la Clientela",
			it: "Attiraclienti",
			pt: "Atrair a Clientela",
			de: "Kunden anlocken"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal a Supporter card you find there, and put it into your hand. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer une carte Supporter que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 6 primeras cartas de tu baraja, enseñar 1 carta de Partidario que encuentres entre ellas y ponerla en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime sei carte del tuo mazzo, mostrare una carta Aiuto presente tra esse e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 6 cartas de cima do seu baralho, revelar uma carta de Apoiador que encontrar lá e colocá-la na sua mão. Embaralhe as outras cartas de volta no seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 6 Karten deines Decks anschauen, 1 Unterstützerkarte, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surfar",
			de: "Surfer"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shimaris Yukichi"
}

export default card