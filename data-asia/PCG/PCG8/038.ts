import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Banette",
         ja: "バネット",
         fr: "Banette",
         de: "Banette",
         es: "Banette",
         it: "Banette",
         pt: "Banette",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [354],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Safeguard",
            ja: "保護",
            fr: "Sauvegarde",
            de: "Sichern",
            es: "Salvaguardia",
            it: "Salvaguardia",
            pt: "Salvaguarda",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Banette by your opponent's PokÃ©mon-ex.",
            ja: "対戦相手のPokã©Mon-ExによってBanetteに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Banette par le poké de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die von den Poké-Mon-EX-EX-EX-EX-EXT-Banette angerichtet wurden.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Banette por el Poké de su oponente Mon-Ex.",
            it: "Prevenire tutti gli effetti degli attacchi, inclusi i danni, fatti a Banette dal poké-ex del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados a Banette pelo Poké Mon-Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Night Murmurs",
            ja: "夜のつぶやき",
            fr: "Murmures nocturnes",
            de: "Nachtschurm",
            es: "Murmullos nocturnos",
            it: "Mormori notturni",
            pt: "Murmuros noturnos",
          },
          effect: {
            en: "If the Defending Pokemon is a Basic Pokemon, that Pokemon is now Confused.",
            ja: "防御ポケモンが基本的なポケモンである場合、そのポケモンは混乱しています。",
            fr: "Si le Pokémon en défense est un Pokémon de base, ce Pokémon est maintenant confus.",
            de: "Wenn das verteidigende Pokémon ein einfaches Pokémon ist, ist dieses Pokémon jetzt verwirrt.",
            es: "Si el Pokémon defensor es un Pokémon básico, ese Pokémon ahora está confundido.",
            it: "Se il Pokemon in carica è un Pokemon di base, quel Pokemon è ora confuso.",
            pt: "Se o Pokémon atual é um Pokémon básico, esse Pokemon agora está confuso.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
