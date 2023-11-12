import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Lovdisc",
		en: "Luvdisc",
		es: "Luvdisc",
		it: "Luvdisc",
		pt: "Luvdisc",
		de: "Liebiskus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Appariement",
			en: "Matching",
			es: "Emparejar",
			it: "Accoppiata",
			pt: "Combinação",
			de: "Pärchen"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Supporter, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Supporter cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 cartas de Partidario, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Aiuto, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Apoiador no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Unterstützerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			fr: "Vibraqua",
			en: "Water Pulse",
			es: "Hidropulso",
			it: "Idropulsar",
			pt: "Pulso d'Água",
			de: "Aquawelle"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card