import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Altaria",
         ja: "アルタリア",
         fr: "Altaria",
         de: "Altaria",
         es: "Altaria",
         it: "Altaria",
         pt: "Altaria",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [334],
      hp: 70,
      types: ["Colorless"],
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
            en: "Prevent all effects of attacks, including damage, done to Altaria by your opponent's PokÃ©mon-ex.",
            ja: "対戦相手のポカン©Mon-Exによってaltariaに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à l'Altaria par le poké de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die Altaria durch die Poké-Mon-ex Ihres Gegners angerichtet haben.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Altaria por el Poké de su oponente Mon-Ex.",
            it: "Prevenire tutti gli effetti degli attacchi, incluso il danno, fatto ad Altari dal Poké Mon-Ex del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados a Altaria pelo Poké Mon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Double Wing Attack",
            ja: "ダブルウィング攻撃",
            fr: "Attaque à double aile",
            de: "Doppelflügelangriff",
            es: "Ataque de doble ala",
            it: "Attacco a doppio ala",
            pt: "Ataque de asa dupla",
          },
          effect: {
            en: "Does 20 damage to each Defending Pokemon.",
            ja: "防御する各ポケモンに20のダメージを与えます。",
            fr: "Fait 20 dommages à chaque Pokémon en défense.",
            de: "Schädigt 20 an jedem verteidigenden Pokémon 20.",
            es: "Hace 20 daños a cada Pokémon defensor.",
            it: "Fa 20 danni a ciascun Pokemon in difesa.",
            pt: "Causa 20 danos a cada Pokémon defensor.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Dive",
            ja: "ダイビング",
            fr: "Plonger",
            de: "Tauchen",
            es: "Bucear",
            it: "Tuffo",
            pt: "Mergulho",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
