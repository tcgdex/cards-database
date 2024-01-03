import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Blastoise",
		fr: "Tortank Radieux",
		es: "Blastoise Radiante",
		it: "Blastoise Lucente",
		pt: "Blastoise Radiante",
		de: "Strahlendes Turtok"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Pump Shot",
			fr: "Coup Gonflé",
			es: "Disparo Bomba",
			it: "Colpo Pompa",
			pt: "Disparo Bombeado",
			de: "Pumpschuss"
		},

		effect: {
			en: "You must discard a Water Energy card from your hand in order to use this Ability. Once during your turn, you may put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Vous devez défausser une carte Énergie Water de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			es: "Debes descartar 1 carta de Energía Water de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			it: "Devi scartare una carta Energia Water che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Você deve descartar 1 carta de Energia Water da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			de: "Du musst 1 Water-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Torrential Cannon",
			fr: "Canon Torrentiel",
			es: "Cañón Torrencial",
			it: "Cannone Torrenziale",
			pt: "Canhão Torrencial",
			de: "Sintflutkanone"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Torrential Cannon.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Canon Torrentiel.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Cañón Torrencial.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Cannone Torrenziale.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Canhão Torrencial.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Sintflutkanone nicht einsetzen."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
