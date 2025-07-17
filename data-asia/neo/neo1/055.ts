import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Murkrow",
         ja: "マークロウ",
         fr: "Sobre",
         de: "Murkrow",
         es: "Turbio",
         it: "Murkrow",
         pt: "MURKROW",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [198],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Mean Look",
            ja: "平均的な外観",
            fr: "Look moyen",
            de: "Mittlerer Blick",
            es: "Mirada",
            it: "Aspetto medio",
            pt: "Aparência média",
          },
          effect: {
            en: "The Defending Pokemon can't retreat as long as Murkrow remains your Active Pokemon. (Benching or evolving either Pokemon ends this effect.)",
            ja: "Murkrowがあなたのアクティブなポケモンのままである限り、防御ポケモンは退却することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
            fr: "Le Pokémon en défense ne peut pas se retirer tant que Murkrow reste votre Pokémon actif. (Benching ou évolution de Pokémon termine cet effet.)",
            de: "Das verteidigende Pokémon kann sich nicht zurückziehen, solange Murkrow Ihr aktives Pokemon bleibt. (BENCHING oder EVOLING ENDERUNG POKEMON beendet diesen Effekt.)",
            es: "El Pokémon defensor no puede retirarse siempre que Murkrow siga siendo su Pokémon activo. (Benching o evolucionando o Pokémon termina este efecto).",
            it: "Il Pokemon in carica non può ritirarsi fintanto che Murkrow rimane il tuo Pokemon attivo. (Panca o evolvendo Pokemon termina questo effetto.)",
            pt: "O Pokémon atual não pode recuar enquanto Murkrow continua sendo seu Pokémon ativo. (Bancho ou evolução de Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Feint Attack",
            ja: "FEINT攻撃",
            fr: "Attaque feinte",
            de: "Scheinangriff",
            es: "Ataques finos",
            it: "Attacco di finta",
            pt: "Ataque de finse",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Pokemon Powers, or any other effects on the Defending Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pouvoirs de pokemon ou tout autre effet sur le Pokémon en défense.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. Der Schaden dieses Angriffs ist nicht durch Schwäche, Widerstand, Pokemon -Kräfte oder andere Auswirkungen auf das verteidigende Pokemon beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poderes de Pokémon o cualquier otro efecto en el Pokémon defensor.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, poteri di Pokemon o altri effetti sul Pokemon in difesa.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. Os danos desse ataque não são afetados pela fraqueza, resistência, poderes de Pokemon ou quaisquer outros efeitos no pokemon atual.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
