import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Sentier Blanche-Cime",
		en: "Path to the Peak",
		es: "Senda Blancacima",
		it: "Sentiero Biancacima",
		pt: "Trilha para o Cume",
		de: "Schneegipfelpfad"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Les Pokémon ayant un encadré Règle(les vôtres et ceux de votre adversaire) n'ont pas de talent. (Les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle.)",
		en: "Pokémon with a Rule Box in play (both yours and your opponent's) have no Abilities. (Pokémon V, Pokémon-GX, etc. have Rule Boxes.)",
		es: "Los Pokémon con un recuadro de regla en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad. (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
		it: "I Pokémon in gioco che hanno una regola speciale, sia tuoi che del tuo avversario, non hanno abilità. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
		pt: "Pokémon em jogo que tenham uma Caixa de Regras (seus e do seu oponente) não têm Habilidades (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras).",
		de: "Pokémon im Spiel (deine und die deines Gegners), die ein Regelfeld haben, haben keine Fähigkeiten. (Pokémon-V, Pokémon-GX usw. haben Regelfelder.)"
	},

	trainerType: "Stadium",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 567256
	}
}

export default card
