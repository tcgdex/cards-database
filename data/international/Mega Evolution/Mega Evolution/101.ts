import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'de-de': "Latios",
		'it-it': "Latios",
		'es-es': "Latios",
		'pt-br': "Latios",
		'es-mx': "Latios"
	},

	illustrator: "Uninori",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	dexId: [381],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lustrous Assist",
			'fr-fr': "Assistance Lustrée",
			'de-de': "Glänzende Hilfe",
			'it-it': "Assistente Abbagliante",
			'es-es': "Asistencia Lustrosa",
			'pt-br': "Socorro Lustroso",
			'es-mx': "Asistencia Lustrosa"
		},

		effect: {
			'en-us': "Once during your turn, when your Mega Latias ex moves from your Bench to the Active Spot, you may use this Ability. Move any amount of Energy from your Benched Pokémon to your Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, lorsque votre Méga-Latias-ex se déplace de votre Banc vers le Poste Actif, vous pouvez utiliser ce talent. Déplacez autant d'Énergies que vous le voulez de vos Pokémon de Banc vers votre Pokémon Actif.",
			'de-de': "Einmal während deines Zuges, wenn dein Mega-Latias-ex von deiner Bank in die Aktive Position wechselt, kannst du diese Fähigkeit einsetzen. Verschiebe beliebig viele Energien von Pokémon auf deiner Bank auf dein Aktives Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, quando il tuo Mega Latias-ex si sposta dalla tua panchina in posizione attiva, puoi usare questa abilità. Sposta un numero qualsiasi di Energie dai Pokémon nella tua panchina al tuo Pokémon attivo.",
			'es-es': "Una vez durante tu turno, cuando tu Mega-Latias ex se mueve de tu Banca al Puesto Activo, puedes usar esta habilidad. Mueve cualquier cantidad de Energías de tus Pokémon en Banca a tu Pokémon Activo.",
			'pt-br': "Uma vez durante o seu turno, quando seu Mega Latias ex for movido do seu Banco para o Campo Ativo, você poderá usar esta Habilidade. Mova qualquer quantidade de Energia dos seus Pokémon no Banco para o seu Pokémon Ativo.",
			'es-mx': "Una vez durante tu turno, cuando tu Mega-Latias ex se mueve de tu Banca al Puesto Activo, puedes usar esta Habilidad. Mueve cualquier cantidad de Energías de tus Pokémon en Banca a tu Pokémon Activo."
		}
	}],

	attacks: [{
		cost: ["Water", "Psychic", "Colorless"],

		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'de-de': "Drachenklaue",
			'it-it': "Dragartigli",
			'es-es': "Garra Dragón",
			'pt-br': "Garra de Dragão",
			'es-mx': "Garra Dragón"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 654440,
				cardmarket: 851172
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 654440,
				cardmarket: 851172
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		}
	],
}

export default card
