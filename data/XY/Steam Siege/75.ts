import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Magearna EX",
		fr: "Magearna EX",
		es: "Magearna EX",
		it: "Magearna EX",
		pt: "Magearna EX",
		de: "Magearna EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		801,
	],

	hp: 160,

	types: [
		"Metal",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystic Heart",
				fr: "Cœur Mystique",
				es: "Corazón Místico",
				it: "Cuormistico",
				pt: "Coração Místico",
				de: "Geheimnisvolles Herz"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Metal Energy attached to it. (Existing effects are not removed.)",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l'Énergie Metal est attachée. (Les effets déjà en action ne sont pas retirés.)",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a cada uno de tus Pokémon que tenga alguna Energía Metal unida a él. (No se eliminan los efectos ya existentes).",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai tuoi Pokémon che abbiano delle Energie Metal assegnate. Gli effetti esistenti non vengono rimossi.",
				pt: "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a cada um dos seus Pokémon que possui alguma Energia Metal ligada a ele. (Efeitos existentes não são removidos.)",
				de: "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, bei jedem deiner Pokémon, an das Metal-Energie angelegt ist. (Bestehende Effekte behalten ihre Wirkung.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soul Blaster",
				fr: "Déflagr'Âme",
				es: "Explosión Ánima",
				it: "Esplodianima",
				pt: "Alma Detonadora",
				de: "Zerstörerische Seele"
			},
			effect: {
				en: "During your next turn, this Pokémon's Soul Blaster attack's base damage is 60.",
				fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Déflagr'Âme de ce Pokémon sont de 60.",
				es: "Durante tu próximo turno, el daño básico del ataque Explosión Ánima de este Pokémon es de 60.",
				it: "Durante il tuo prossimo turno, i danni base dell'attacco Esplodianima di questo Pokémon sono 60.",
				pt: "Durante sua próxima vez de jogar, o dano base do ataque Alma Detonadora deste Pokémon será 60.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Zerstörerische Seele dieses Pokémon 60 Schadenspunkte."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic"
}

export default card
