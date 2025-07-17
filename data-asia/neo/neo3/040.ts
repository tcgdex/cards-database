import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Shuckle",
         ja: "シャックル",
         fr: "Brillant",
         de: "Schüttelt",
         es: "Llave",
         it: "Sussultare",
         pt: "Esmagado",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [213],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Hard Shell",
            ja: "ハードシェル",
            fr: "Coquille dure",
            de: "Harte Schale",
            es: "Cáscara",
            it: "Guscio duro",
            pt: "Concha dura",
          },
          effect: {
            en: "Whenever an attack <em>(including your own)</em> does 40 or less damage to Shuckle <em>(after applying Weakness and Resistance)</em>, reduce that damage to 10. <em>(Any other effects of attacks still happen.)</em> This power stops working while Shuckle is Asleep, Confused, or Paralyzed.",
            ja: "攻撃が（あなた自身を含む）<em> </em>がシャックル<em>（脱力感と抵抗を適用した後）に40以下のダメージを与えたとき、その損傷を10に減らします（攻撃の他の影響はまだ起こります。）",
            fr: "Chaque fois qu'une attaque <em> (y compris le vôtre) </em> fait 40 dommages ou moins à Shuckle <em> (après avoir appliqué une faiblesse et une résistance) </em>, réduisez ces dégâts à 10. <em> (tous les autres effets des attaques sont toujours.",
            de: "Immer wenn ein Angriff <em> (einschließlich Ihrer eigenen) </em> 40 oder weniger Schäden an schüttelnem <em> (nach Anbringen von Schwäche und Widerstand) </em> schädigt, reduzieren Sie diese Schädigung auf 10.",
            es: "Cada vez que un ataque <em> (incluido el tuyo) </em> hace 40 o menos daño para shuckle <em> (después de aplicar debilidad y resistencia) </em>, reduzca ese daño a 10. <em> (todavía ocurren otros efectos de los ataques). </em> Esta potencia deja de funcionar mientras el shuckle está dormido, confundido o paralizado.",
            it: "Ogni volta che un attacco <em> (incluso il tuo) </em> fa 40 o meno danni a suscitare <em> (dopo aver applicato la debolezza e la resistenza) </em>, riduce quel danno a 10. <em> (qualsiasi altro effetto degli attacchi ancora si verifica.) </em> Questo potere smette di funzionare mentre shuckle è addormentato, confuso o paralizzato.",
            pt: "Sempre que um ataque <em> (incluindo o seu) causa 40 ou menos danos a Shuckle <em> (depois de aplicar fraqueza e resistência) </em>, reduza esse dano a 10. <em> (Quaisquer outros efeitos dos ataques ainda acontecem).",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Toxic Saliva",
            ja: "有毒な唾液",
            fr: "Salive toxique",
            de: "Giftiger Speichel",
            es: "Saliva tóxica",
            it: "Saliva tossica",
            pt: "Saliva tóxica",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Il faut maintenant 20 dégâts de poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Nach jedem Spieler benötigt es jetzt 20 Giftschaden anstelle von 10 (auch wenn es bereits vergiftet war).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Ahora requiere 20 daños por veneno en lugar de 10 después del turno de cada jugador (incluso si ya estaba envenenado).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Ora ci vogliono 20 danni al veleno invece di 10 dopo il turno di ogni giocatore (anche se era già avvelenato).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Agora, são necessários 20 danos ao veneno em vez de 10 após a vez de cada jogador (mesmo que já estivesse envenenado).",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
