import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Dewgong",
		fr: "Lamantine",
		es: "Dewgong",
		'es-mx': "Dewgong",
		de: "Jugong",
		it: "Dewgong",
		pt: "Dewgong"
	},

	illustrator: "Yoshioka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wash Out",
			fr: "Surlavage",
			es: "Hacer Limpieza",
			'es-mx': "Acuarrastre",
			de: "Wegspülen",
			it: "Sciacquare",
			pt: "Lavagem"
		},

		effect: {
			en: "As often as you like during your turn, you may use this Ability. Move a {W} Energy from 1 of your Benched Pokémon to your Active Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie {W} de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			es: "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía {W} de uno de tus Pokémon en Banca a tu Pokémon Activo.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes usar esta Habilidad. Mueve 1 Energía {W} de 1 de tus Pokémon en Banca a tu Pokémon Activo.",
			de: "Beliebig oft während deines Zuges kannst du diese Fähigkeit einsetzen. Verschiebe 1 {W}-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon.",
			it: "Durante il tuo turno, puoi usare questa abilità tutte le volte che vuoi. Sposta un'Energia {W} da uno dei Pokémon nella tua panchina al tuo Pokémon attivo.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá usar esta Habilidade. Mova uma Energia {W} de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "J"
}

export default card