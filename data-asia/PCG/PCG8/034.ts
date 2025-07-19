import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Sceptile ex (Delta Species)",
         ja: "seccepile ex（デルタ種）",
         fr: "Sceptile ex (espèce delta)",
         de: "Sceptile Ex (Delta -Arten)",
         es: "Sceptile ex (especie delta)",
         it: "Sceptile Ex (Delta Species)",
         pt: "SCECTILE EX (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [254],
      hp: 140,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Extra Liquid",
            ja: "余分な液体",
            fr: "Supplémentaire",
            de: "Zusätzliche Flüssigkeit",
            es: "Líquido extra",
            it: "Liquido extra",
            pt: "Líquido extra",
          },
          effect: {
            en: "Each player's PokÃ©mon-ex can't use any PokÃ©-Powers and pays {{e}} more Energy to use its attacks. Each PokÃ©mon can't be affected by more than 1 Extra Liquid PokÃ©-Body.",
            ja: "各プレイヤーのpokã©mon-exは、攻撃を使用するために{{e}}より多くのエネルギーを支払うことができません。各ポカモンは、1つ以上の余分な液体Pokã©Bodyによって影響を受けることはできません。",
            fr: "Le poké de chaque joueur ne peut utiliser aucune énergie Pokã © -powers et paie {{e}} plus d'énergie pour utiliser ses attaques. Chaque pokã © mon ne peut pas être affecté par plus de 1 poké liquide supplémentaire.",
            de: "Die Poké-Ex-EX-EX-EX-EX-EX-EX-EX-EX-EX-EX-Explosion kann nicht mehr Energie für die Verwendung seiner Angriffe verwenden. Jeder Poké Mon kann nicht von mehr als 1 zusätzlichen flüssigen Poké-Körper betroffen sein.",
            es: "El Poké de cada jugador no puede usar ningún Poké de Poké y paga {{E}} más energía para usar sus ataques. Cada Poké Mon no puede verse afectado por más de 1 cuerpo de Poké líquido adicional.",
            it: "Il poké di ogni giocatore non può usare alcun poké-powers e paga {{e}} più energia per usare i suoi attacchi. Ogni poké mon non può essere influenzato da più di 1 oxtra liquido poké -body.",
            pt: "O Poké Mon-ex de cada jogador não pode usar nenhum poké-powers e paga {{e}} mais energia para usar seus ataques. Cada Poké-Mon não pode ser afetado por mais de 1 Poké de líquido extra.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Power Revenge",
            ja: "パワーリベンジ",
            fr: "Vengeance de puissance",
            de: "Machtrache",
            es: "Venganza de poder",
            it: "Power Revenge",
            pt: "Vingança de poder",
          },
          effect: {
            en: "Does 60 damage plus 10 more damage for each Prize card your opponent has taken.",
            ja: "対戦相手が取った各賞カードに対して60のダメージと10件のダメージがさらに10件のダメージを与えます。",
            fr: "Fait 60 dégâts plus 10 dommages supplémentaires pour chaque carte de prix que votre adversaire a subi.",
            de: "Fügt 60 Schäden plus 10 weitere Schäden für jede Preiskarte, die Ihr Gegner angenommen hat.",
            es: "Hace 60 daños más 10 daños más para cada tarjeta de premio que ha recibido su oponente.",
            it: "Fa 60 danni più 10 danni in più per ogni carta premio che l'avversario ha subito.",
            pt: "60 danos mais 10 mais danos para cada cartão de prêmio que seu oponente tomou.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
