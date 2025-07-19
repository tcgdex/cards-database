import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Ninetales",
         ja: "ニネタール",
         fr: "Ninetales",
         de: "Ninetales",
         es: "Ninetales",
         it: "Ninetales",
         pt: "Ninetales",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [38],
      hp: 70,
      types: ["Fire"],
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
            en: "Prevent all effects of attacks, including damage, done to Ninetales by your opponent's PokÃ©mon-ex.",
            ja: "対戦相手のPokã©Mon-Exによってニネタールに行われる損傷を含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Ninetales par le poké de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die von den Poké-Mon-EX Ihres Gegners nach Ninetales geleistet wurden.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Ninetales por el Poké de tu oponente Mon-Ex.",
            it: "Prevenire tutti gli effetti degli attacchi, incluso il danno, fatto a Ninetales dal Poké Mon-ex del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados a Ninetales pelo Poké Mon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos.",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Will-o'-the-wisp",
            ja: "will-o'-the-wisp",
            fr: "Will-o'-le-wisp",
            de: "Will-o'-the-wisp",
            es: "Will-o'-the-wisp",
            it: "Will-O'-The-Wisp",
            pt: "Will-o'-the-wisp",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
