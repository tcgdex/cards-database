import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Primeape",
         ja: "ダークプライムエーパー",
         fr: "Primeape sombre",
         de: "Dunkle Primape",
         es: "Primeape oscura",
         it: "Primeape oscura",
         pt: "Dark Primeape",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [57],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Frenzy",
            ja: "狂乱",
            fr: "Frénésie",
            de: "Raserei",
            es: "Frenesí",
            it: "Frenesia",
            pt: "Frenesi",
          },
          effect: {
            en: "If Dark Primeape does any damage while it's Confused <em>(even to itself)</em>, it does 30 more damage.",
            ja: "Dark Primeapeが混乱している間にダメージを与えた場合（それ自体が）</em> </em>であれば、30回のダメージを与えます。",
            fr: "Si Dark Primeape fait des dégâts alors qu'il est confus <em> (même à lui-même) </em>, il fait 30 dégâts supplémentaires.",
            de: "Wenn Dark Primape Schaden anrichtet, während es <em> (sogar für sich selbst) </em> verwirrt ist, verursacht es 30 weitere Schäden.",
            es: "Si Dark Primeape hace algún daño mientras está confundido <em> (incluso para sí mismo) </em>, hace 30 daños más.",
            it: "Se Dark Primeape fa qualche danno mentre è confuso <em> (anche per sé) </em>, fa altri 30 danni.",
            pt: "Se o Dark Primeape causar algum dano enquanto estiver confuso <em> (mesmo para si mesmo) </em>, causa mais 30 danos.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Frenzied Attack",
            ja: "熱狂的な攻撃",
            fr: "Attaque frénétique",
            de: "Rasender Angriff",
            es: "Ataque frenético",
            it: "Attacco frenetico",
            pt: "Ataque frenético",
          },
          effect: {
            en: "Dark Primeape is now Confused (after doing damage).",
            ja: "ダークプライムエーテは現在混乱しています（ダメージを受けた後）。",
            fr: "Primeape sombre est maintenant confus (après avoir fait des dégâts).",
            de: "Dark Primape ist jetzt verwirrt (nach Schaden).",
            es: "Dark Primeape ahora está confundido (después de hacer daño).",
            it: "Dark Primeape è ora confuso (dopo aver fatto danni).",
            pt: "O Dark Primeape agora está confuso (depois de causar danos).",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
